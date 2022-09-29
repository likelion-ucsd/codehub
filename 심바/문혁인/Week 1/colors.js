var Links = {
  setColor: function (color) {
    // method using jQuery
    $("a").css("color", color);
  },
};

var Body = {
  setColor: function (color) {
    // document.querySelector("body").style.color = color;
    $("body").css("color", color);
  },
  setBackgroundColor: function (color) {
    // document.querySelector("body").style.backgroundColor = color;
    $("body").css("backgroundColor", color);
  },
};

function darkLight(self) {
  var target = document.querySelector("body");
  if (self.value === "dark") {
    // background & text color change to 'dark mode'

    Body.setColor("white");
    Body.setBackgroundColor("black");
    self.value = "light";

    // a tag color to lightpink
    Links.setColor("lightpink");
  } else {
    // background & text color change to 'light mode'
    Body.setColor("black");
    Body.setBackgroundColor("white");
    self.value = "dark";

    // a tag color to lightpink
    Links.setColor("blue");
  }
}
