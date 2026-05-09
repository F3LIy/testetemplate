exports.handler = async (event) => {
  try {
    const { url } = JSON.parse(event.body);

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'pt-BR,pt;q=0.9',
      }
    });

    const html = await response.text();

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        html,
        status: response.status,
        tamanho: html.length
      })
    };

  } catch (err) {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message, stack: err.stack })
    };
  }
};
