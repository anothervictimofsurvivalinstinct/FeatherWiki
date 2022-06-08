// Generate full html doc for saving. See also index.html
export function generateWikiHtml(state) {
  const { a, s, c, p, j } = state;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${p.name}</title>
  ${p.desc ? `<meta name="description" content="${p.desc.replace(/"/g, '\\"')}">` : ''}
  <meta name="version" content="{{buildVersion}}_{{package.json:version}}" />
  <meta name="application-name" content="{{package.json: title}}" />
  <style id="s">${s}</style>
  ${c ? `<style id=c>${c}</style>` : ''}
  <script id="p" type="application/json">${JSON.stringify(FW.json.compress(p))}</script>
  <script id="a">${a}</script>
  ${j ? `<script id=j>${j}</script>` : ''}
</head>
<body>
  <a href="https://codeberg.org/Alamantus/FeatherWiki#versions">JavaScript is required</a>
</body>
</html>`;
}