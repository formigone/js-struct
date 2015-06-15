var articlesArray = [
  {
    id: 1,
    title: 'Title One',
    author: 'Alvaro',
    date: 1434373005617,
    body: '...'
  },
  {
    id: 2,
    title: 'Title Two',
    author: 'Alicia',
    date: 1434373235617,
    body: '...'
  },
  {
    id: 3,
    title: 'Title Three',
    author: 'Adriana',
    date: 1434423005617,
    body: '...'
  },
  {
    id: 4,
    title: 'Title Four',
    author: 'Alicia',
    date: 1434373235617,
    body: '...'
  },
];
var list = new LinkedList();

articlesArray.forEach(function(article){
  list.add(article);
});

function onAddToAuthor(article){
  var authorNode = null;

  list.has({author: article.author}, function(currNode, node){
    if (currNode.data.author === node.author){
      authorNode = currNode;
      return true;
    }

    return false;
  });

  if (authorNode !== null) {
    list.add(article, authorNode);
  }
}


var article = {
  id: 23,
  title: 'New Article',
  author: 'Adriana',
  date: 1414223305317,
  body: '!!!'
};


console.log(list.toString());
onAddToAuthor(article);
console.log(list.toString());
