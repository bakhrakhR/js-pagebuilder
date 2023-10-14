const contentContainer = document.querySelector('.content-container');
const widthInput = document.querySelector('#width-input');
const heightInput = document.getElementById('height-input');
const colorDiv = document.getElementById('color-input');
const form = document.getElementById("form");
const selectWidth = document.getElementById("select-width");
const selectHeight = document.getElementById("select-height");
const selectFontSize = document.getElementById("select-fontSize");
const saveBtn = document.getElementById("save");
const loadBtn = document.getElementById("load");
const clearBtn = document.getElementById("clear");
const textColor = document.getElementById('color-input-text');
const dirRow = document.getElementById('direction-row');
const inputText = document.getElementById('text-input');
const spaceInput = document.getElementById('space-input');
const spaceUnit = document.getElementById('select-space-space');
const textSize = document.getElementById('fontSize-input');
//border part//
const widthBorder = document.getElementById('width-border-input');
const widthBorderUnits = document.getElementById('select-width-input-u');
const borderColor = document.getElementById('color-input-border');

const lbRadius = document.getElementById('l-b-radius-input');
const lbRadiusUnits = document.getElementById('select-width-radius1');

const ltRadius = document.getElementById('l-t-radius-input');
const ltRadiusUnits = document.getElementById('select-width-radius-2');

const rbRadius = document.getElementById('r-b-radius-input');
const rbRadiusUnits = document.getElementById('select-width-radius-3');

const rtRadius = document.getElementById('r-t-radius-input');
const rtRadiusUnits = document.getElementById('select-width-radius-4');

const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function (e) {
        e.preventDefault();
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

widthInput.max = widthInput.getBoundingClientRect().x;
selectHeight.max = widthInput.getBoundingClientRect().y;

form.addEventListener('submit', (event) => {
    let element = document.createElement("div");
    element.style.width = widthInput.value + selectWidth.value;
    element.style.height = heightInput.value + selectHeight.value;
    element.style.backgroundColor = colorDiv.value;
    element.innerText = inputText.value;
    element.style.fontSize = textSize.value + selectFontSize.value;
    element.style.color = textColor.value;

    element.style.borderStyle = "solid";
    element.style.borderColor = borderColor.value;
    element.style.borderWidth = widthBorder.value + widthBorderUnits.value;

    element.style.borderTopLeftRadius = ltRadius.value + ltRadiusUnits.value;
    element.style.borderBottomLeftRadius = lbRadius.value + lbRadiusUnits.value;
    element.style.borderTopRightRadius = rtRadius.value + rtRadiusUnits.value;
    element.style.borderBottomRightRadius = rbRadius.value + rbRadiusUnits.value;
    element.style.textAlign = 'center';
    element.style.lineHeight = heightInput.value + selectHeight.value;
    dirRow.checked ? contentContainer.style.flexDirection = 'row' : contentContainer.style.flexDirection = 'column';
    contentContainer.style.gap = spaceInput.value + spaceUnit.value;
    event.preventDefault();
    contentContainer.appendChild(element);
})


saveBtn.addEventListener('click', () => {
    localStorage.setItem('elements', contentContainer.outerHTML);
})
loadBtn.addEventListener('click', () => {
    if (localStorage.getItem('elements') !== '') {
        const items = localStorage.getItem('elements');
        contentContainer.outerHTML = items;
    }
    else {
        alert('storage is empty');
    }
})

clearBtn.addEventListener('click', () => {
    console.log(contentContainer);
    localStorage.setItem('elements', '');
    window.location.reload();
})
