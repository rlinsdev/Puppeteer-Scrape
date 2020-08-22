// Require puppeteer
const puppeteer = require("puppeteer");

debugger;
(async () => {
  debugger;

  // URL que sofrerá o scrapping
  // URL: The Shawshank Redemption - IMB
  let movieURL = "https://www.imdb.com/title/tt0111161/?ref_=vp_vi_tt";

  let browser = await puppeteer.launch();
  let page = await browser.newPage();

  // Abrindo o browser e indo para a URL
  // Checa se carregou tudo mesmo
  await page.goto(movieURL, { waitUntil: "networkidle2" });

  // Atribui em uma variável. Retorno será um objeto
  let data = await page.evaluate(() => {
      // Constantes para recuperar via CSS o valor
    const pathTitulo = 'div[class="title_wrapper"] > h1';
    const pathRate = 'span[itemprop="ratingValue"]';
    if (
      document.querySelector(pathTitulo) &&
      document.querySelector(pathRate)
    ) {
      // Recupera o Titulo por Query Selector
      const title = document.querySelector(pathTitulo).innerText;
      // Recupera a nota pelo Query Selector
      const rate = document.querySelector(pathRate).innerText;

      return {
        title,
        rate,
      };
    }
  });

  debugger;
  console.log(data);

  await browser.close();
})();
