

var allElements= document.querySelector('.container');
var pageHeader= document.querySelector ('#page-header');
var headerTitle = document.querySelector('#main-heading');
var para1 = document.querySelector('#para1');
var para2 = document.querySelector('#para2');
var para4 = document.querySelector('#para4');
var card1 = document.querySelector('#red');
var card2 = document.querySelector('#blue');
var card3 = document.querySelector('#yellow');
var card4 = document.querySelector('#green');
var card5 = document.querySelector('#black');
var mainButton = document.querySelector('#btn');



headerTitle.textContent = 'New DOM Layout';
pageHeader.classList ='bg-success';

para1.textContent = ' The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure. The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.';

para2.textContent ='The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.';

card1.classList = 'bg-danger';
card2.classList = 'bg-primary';
card3.classList = 'bg-warning';
card4.classList = 'bg-success';
card5.classList = 'bg-dark';


function clickedButton(){

para4.textContent ='The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.';
}

mainButton.addEventListener("click", clickedButton);