$(document).ready(function() {
  function growOne() {
    $("#one").one("click", function() {
      $(this).animate(
        {
          top: "-=100",
          height: "+=100"
        },
        3000
      );
    });
  }

  function growTwo() {
    $("#two").one("click", function() {
      $(this).animate(
        {
          top: "-=150",
          height: "+=150"
        },
        3000
      );
    });
  }

  function growThree() {
    $("#three").one("click", function() {
      $(this).animate(
        {
          top: "-=350",
          height: "+=350"
        },
        3000
      );
    });
  }

  function growFour() {
    $("#four").one("click", function() {
      $(this).animate(
        {
          top: "-=200",
          height: "+=200"
        },
        3000
      );
    });
  }

  growOne();
  growTwo();
  growThree();
  growFour();
});
