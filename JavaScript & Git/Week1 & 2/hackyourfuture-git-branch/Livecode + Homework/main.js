for (let i = 1; i <= 100; i++) {
  console.log(i);
  if (i % 15 == 0) {
    console.log("HackYourFuture");
  } else if (i % 3 == 0) {
    console.log("Hack");
  } else if (i % 5 == 0) {
    console.log("Future");
  }
}

// Google search result 
// for (var i = 0; ++i <= 100;) {
//   var a = i % 3 == 0, b = i % 5 == 0;
//   console.log(a ? b ? "HackYourFuture" : "Hack" : b ? "Future" : i);
// }
// or with extra variable
// for (var i = 0; ++i <= 100;) {
//   var a = i % 3 == 0, b = i % 5 == 0, c = i % 15 == 0;
//   console.log(c ? "HackYourFuture" : a ? "Hack" : b ? "Future" : i);
// }

// Google search result (Unreadable)
// for(var i=1;100>=i;++i)console.log(i%15!==0?i%5!==0?i%3===0?"Hack":i:"Future":"HackYourFute");
