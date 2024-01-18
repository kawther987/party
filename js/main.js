/// <reference types="../@types/jquery" />

//typed script
$(() => {
  let options = {
    strings: ["Egyption Party", "Enjoy !"],
    typeSpeed: 200,
    backSpeed: 200,
    backDelay: 1000,
    loop: true,
  };

  let typed = new Typed("#typed-text", options);
});

//side bar
$(".openIcon").on("click", () => {
  $(".sideBar").animate({ width: "250px" }, 2000);
});

$(".closeIcon").on("click", () => {
  $(".sideBar").animate({ width: "0" }, 2000);
  $(".openIcon")
    .removeClass("fa-right-from-bracket")
    .addClass("fa-right-to-bracket");
});

//show caption
$("#details #caption h3").on("click", (e) => {
  let current = $(e.target);
  $("#details #caption p").not($(current).next()).slideUp(500);
  current.next().slideToggle(500);
});

// loading screen
$(() => {
  $(".loader").fadeOut(1500, () => {
    $(".loadingScreen").fadeOut(1500, () => {
      $("body").css("overflow", "auto");
      $(".loading").remove();
    });
  });
});

//button up
$(window).on("scroll", () => {
  let sectionOffset = $("#details").offset().top;
  let windowScroll = $(window).scrollTop();
  if (windowScroll > sectionOffset - 30) {
    $("#btnUp").fadeIn(500);
  } else {
    $("#btnUp").fadeOut(500);
  }
});

$("#btnUp").on("click", () => {
  $("html,body").animate({ scrollTop: 0 }, 1000);
});

// smooth scrol behavior
$("a[href^='#']").on("click", function () {
  let aHref = $(this).attr("href");
  let sectionOffset = $(aHref).offset().top;
  console.log(sectionOffset);
  $("html,body").animate({ scrollTop: sectionOffset }, 1000);
});

$(() => {
  $(".skitter-large").skitter();
});

//choose bg
$("aside img").on("click", function () {
  const currentSrc = $(this).attr("src");
  $("#home").css("backgroundImage", `url(${currentSrc})`);
});

//count down
$(() => {
  let partyDate = new Date("Octobar 1, 2024 23:59:59").getTime();

  let countdownInterval = setInterval(() => {
    let currentDate = new Date().getTime();

    let remainingTime = partyDate - currentDate;

    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    $("#days").text(days);
    $("#hrs").text(hours);
    $("#min").text(minutes);
    $("#sec").text(seconds);

    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      $(".countdown").html("Countdown expired");
    }
  }, 1000);
});

//textarea
$(".submit").on("click", function (e) {
  e.preventDefault();
});

const maxLength = 100;
const massage = $("#msg");
const remainingChars = $("#remaining-chars");

massage.on("input", function () {
  const currentLength = $(this).val().length;
  let remaining = maxLength - currentLength;

  if (remaining < 0) {
    let trimmedText = $(this).val().substring(0, maxLength);
    $(this).val(trimmedText);
    remaining = 0;
    $("#char-count").text("Your Available Character Finished ...");
    $("#char-count").css({"color" : "red" , "fontSize" : "20px"})
    
  }

  remainingChars.text(remaining);
});
