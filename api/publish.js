/**
 * Vercel Serverless Function — Secure CMS Publisher
 * 
 * Safely commits changes to GitHub using the server-side GITHUB_TOKEN
 * environment variable without exposing the token to the browser or public git repo.
 */

export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { content, pin } = req.body || {};

        // 1. Optional Studio PIN protection (default: 2024 or custom via env)
        const expectedPin = process.env.STUDIO_PIN || '2024';
        if (pin && pin !== expectedPin) {
            return res.status(401).json({ error: 'Invalid Studio PIN.' });
        }

        // 2. Read GitHub Token from Vercel Environment Variables
        const token = process.env.GITHUB_TOKEN_90day || process.env.GITHUB_TOKEN;
        if (!token) {
            return res.status(500).json({ 
                error: 'GitHub token (GITHUB_TOKEN_90day or GITHUB_TOKEN) is not configured in Vercel Environment Variables.' 
            });
        }

        const repo = process.env.GITHUB_REPO || 'Dayweng/fantasticVisualsWeb';
        const path = 'assets/js/projects-data.js';
        const apiUrl = `https://api.github.com/repos/${repo}/contents/${path}`;

        // 3. Fetch current file SHA from GitHub
        const getRes = await fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'FantasticVisuals-CMS'
            }
        });

        let sha = null;
        if (getRes.ok) {
            const fileData = await getRes.json();
            sha = fileData.sha;
        }

        // 4. Encode content to Base64
        const utf8Bytes = new TextEncoder().encode(content);
        let binary = '';
        utf8Bytes.forEach(b => binary += String.fromCharCode(b));
        const contentBase64 = btoa(binary);

        // 5. Commit updated file to GitHub
        const putRes = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json',
                'User-Agent': 'FantasticVisuals-CMS'
            },
            body: JSON.stringify({
                message: `chore: update portfolio via Studio CMS [${new Date().toLocaleTimeString()}]`,
                content: contentBase64,
                sha: sha,
                branch: 'main',
                committer: {
                    name: 'Fantastic Visuals Studio',
                    email: 'contact@fantasticvisuals.com'
                }
            })
        });

        if (putRes.ok) {
            return res.status(200).json({ 
                success: true, 
                message: 'Published to GitHub successfully! Vercel is redeploying.' 
            });
        } else {
            const errData = await putRes.json();
            return res.status(putRes.status).json({ 
                error: errData.message || 'GitHub commit failed.' 
            });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message || 'Server error' });
    }
}
