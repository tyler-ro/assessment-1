const totalCount = document.getElementById("totalCount");

let i = 0;

const handleIncrement = () => {
  i++;
  totalCount.innerHTML = i;
};

const handleDecrement = () => {
  i--;
  totalCount.innerHTML = i;
};

const incrementCount = document.getElementById("plus-button");
const decrementCount = document.getElementById("minus-button");

incrementCount.addEventListener("click", handleIncrement);

decrementCount.addEventListener("click", handleDecrement);

function eventHandler(evt) {
  if (evt >= i) {
    return totalCount;
  } else {
    return i;
  }
}

console.log("Hello");
