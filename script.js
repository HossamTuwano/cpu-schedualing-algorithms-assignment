const select = document.querySelector("select");

select.addEventListener("change", changeSelect);

function changeSelect(algorithm) {
  for (let option of Array.from(select.options)) {
    if (option.selected) {
      algorithm = option.value;
      switch (algorithm) {
        case "FCFS":
          console.log(option.value);
      }
      switch (algorithm) {
        case "SJF":
          console.log(option.value);
      }
      switch (algorithm) {
        case "SRTF":
          console.log(option.value);
      }
      switch (algorithm) {
        case "RR":
          console.log(option.value);
      }
      switch (algorithm) {
        case "priority":
          console.log(option.value);
      }
    }
  }
}
