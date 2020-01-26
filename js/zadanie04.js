const classes = document.querySelectorAll('.sample_class');
const array = [];
classes.forEach(className => array.push(className));

function getTagsOfElements(elements) {
    const array = [];
    elements.forEach(element => array.push(element.tagName));
    return array;
}

const liElements = document.querySelectorAll('.sample_class_2 li');

function getInnerTextsOfElements(elements) {
    const array = [];
    elements.forEach(element => array.push(element.innetHTML));
    return array;
}

const links = document.querySelectorAll('a');

function getAddressesOfElements(elements) {
    const array = [];
    for (element of elements) {
        array.push(element.href);
    }
    elements.forEach(element => array.push(element.href));
    return array;
}

const children = document.querySelectorAll('.sample_class_3').children;

console.log(getTagsOfElements(classes));
console.log(getInnerTextsOfElements(liElements));
console.log(getAddressesOfElements(links));
console.log(children);