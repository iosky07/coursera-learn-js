console.log("sini");

// var xhr = new XMLHttpRequest();
var url = 'https://mailproject0-5500.theianext-1-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/coursera-learn-js/SampleFolder/healthArticle/health_article.json';


const articlesDiv = document.getElementById('articles');

async function getData() {
    // fetch data
    const response = await fetch(url);
    const data = await response.json();

    return data.articles; // kirim articles keluar
}

// panggil getData dan render setelah selesai
getData().then(articles => {
    articles.forEach(article => {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        // Title
        var title = document.createElement('h2');
        title.textContent = article.title;

        // Description
        var description = document.createElement('p');
        description.textContent = article.description;

        // Ways to achieve
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(way => {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        // Benefits
        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(benefit => {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        // append semuanya ke articleDiv
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        // append ke main container
        articlesDiv.appendChild(articleDiv);
    });
});
