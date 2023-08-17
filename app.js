let string = "";
let buttons = document.querySelectorAll(".button");
try {
  Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.innerHTML == "=") {
        try {
          string = eval(string);
          if (isNaN(string) || !isFinite(string)) {
            document.querySelector("input").value = "Error";
          } else {
            string = eval(string);

            document.querySelector("input").value = string;
          }
        } catch (error) {
          document.querySelector("input").value = "Error";
        }
      } else if (e.target.innerHTML == "AC") {
        string = "";
        document.querySelector("input").value = string;
      } else if (e.target.innerHTML == "DEL") {
        string = string.slice(0, -1);
        document.querySelector("input").value = string;
      } else {
        console.log(e.target.innerHTML);
        string = string + e.target.innerHTML;
        document.querySelector("input").value = string;
      }
    });
  });
} catch (error) {
  console.log(error.message);
}
