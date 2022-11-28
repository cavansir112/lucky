$(document).ready(function () {

  
  
  
  $("#chevronBottom").click(function(){
        $(".showUl-mobile").toggle()
        $("#chevronBottom").toggleClass("chevtonBtn")
        
    })

    $("#mdIcons").click(function(){
        $(".nav-menu-mobile").css("display", "block");
        $("#removeMenu").css("display", "block");
        $("#mdIcons").css("display", "none");
    })


    $("#removeMenu").click(function(){
        $(".nav-menu-mobile").css("display", "none");
        $("#removeMenu").css("display", "none");
        $("#mdIcons").css("display", "block");
    })

    $(".catagiry-menu-mob").click(function(){
        $(".catalog-list-mobile").toggleClass("catalog-list-mobile-active")
    })

    
    //  ============== componen-home ================

    


    let numText = 1
    $("#more-btn").click(function(){
      numText += 1
      $("#number-span").val(numText) 
    })

    $("#less-btn").click(function(){
      numText -= 1
      if( 1 < $("#number-span").val()){
        $("#number-span").val(numText) 
      }
    })

    $("#userActiveBtn").click(function(){
      $("#UserActiveTable").show();
      $("#UserRemovTable").hide();
      $("#userActiveBtn").addClass("user-btn-active");
      $("#userRemoveBtn").removeClass("user-btn-active");
    })

    $("#userRemoveBtn").click(function(){
      $("#UserActiveTable").hide();
      $("#UserRemovTable").show();
      $("#userActiveBtn").removeClass("user-btn-active");
      $("#userRemoveBtn").addClass("user-btn-active");
    })


   

   



    $(".smole-box2").click(function(){
      $(".smole-box2").addClass("smole-box-active");
      $(".smole-box1").removeClass("smole-box-active");
      $("#shovImg").show();
      $("#hideImg").hide();
    })


    $(".smole-box1").click(function(){
      $(".smole-box1").addClass("smole-box-active");
      $(".smole-box2").removeClass("smole-box-active");
      $("#shovImg").hide();
      $("#hideImg").show();
    })

  
    $(".filter-btn").click(function(){
      $(".catagoriy-sidebar").toggle()
    })








    $('.item-comp').slick({
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
                responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      },
      
      );

      
  


    let mobileUl = $(".catalog-list-mobile ul i");
    for (let i = 0; i < mobileUl.length; i++) {
      $(`#btnicon${i}`).click(function(){
          $(`#btnicon${i}`).toggleClass("catalog-list-icon-active")
          $(`#listUl${i}`).toggle(300)
        })
    }

    


  let part = data;
  // localStorage.setItem("part", JSON.stringify(partt))
  // let part = JSON.parse(localStorage.getItem("partt"));
  // let part2 = data2;
  let partData = $(".office-box-home")
  let partData2 = $(".office-box-home2")
  let partData3 = $(".office-box-catalog");
  let partData4 = $(".office-box-order");
  let partData5 = $(`.office-box-sale`);
  let partData6 = $(`.new-comp`);
  let partData7 = $(`.office-box-discount`);
  let partData8 = $(`.office-box-sold`)
  let shopbtn = 0
  let ingener = 0
  let costSpan = 0

  $(".shopBtn").click(function(){
    ingener += 1
    $(".icon-number").text(ingener)
  })

  // console.log(part)

  for(let i = 0; i < part.length; i++){
    if(part[i].type == "Ofis ləvazimatları"){
      partData.append(
        `<div class="col-lg-3 col-md-6 col-12 ">
          <div class="office-box-text">
            <div class=" office-like d-flex justify-content-between w-100 p-2">
              <div class=""></div>
              <div class="">
                <button id="btn-like${part[i].id}" class="btn-like">
                    <img src="https://www.los.az/lucky/images/icon/heart-outline.svg" alt="">
                </button>
                <button id="btn-like-pro${part[i].id}" class="btn-like-pro">
                    <img src="https://www.los.az/lucky/images/icon/heart-filled.svg" alt="">
                </button>
              </div>
            </div>  
            <div class="box-img w-100">
              <a href="sale-comp.html"><img src="${part[i].img}" alt=""></a>
            </div>
            <div class="box-text w-100 ">
                <h5>${part[i].name}</h5>
                <span>${part[i].cost.toFixed(2)} Azn </span>
                <button id="shopBtn${part[i].id}" class="shopsBtn">Səbətə at</button>
            </div>
          </div>
        </div>`
      )

      partData5.append(
        `<div class="col-lg-3 col-md-6 col-12 ">
          <div class="office-box-text">
            <div class=" office-like d-flex justify-content-between w-100 p-2">
              <div class=""></div>
              <div class="">
                <button id="btn-like${part[i].id}" class="btn-like">
                    <img src="https://www.los.az/lucky/images/icon/heart-outline.svg" alt="">
                </button>
                <button id="btn-like-pro${part[i].id}" class="btn-like-pro">
                    <img src="https://www.los.az/lucky/images/icon/heart-filled.svg" alt="">
                </button>
              </div>
            </div>  
            <div class="box-img w-100">
              <a href="sale-comp.html"><img src="${part[i].img}" alt=""></a>
            </div>
            <div class="box-text w-100 ">
                <h5>${part[i].name}</h5>
                <span>${part[i].cost.toFixed(2)} Azn  </span>
                <button id="shopBtn${part[i].id}" class="shopsBtn">Səbətə at</button>
            </div>
          </div>
        </div>`
      )

      partData8.append(
        `<div class="col-lg-3 col-md-6 col-12 ">
          <div class="office-box-text">
            <div class=" office-like d-flex justify-content-between w-100 p-2">
              <div class=""></div>
              <div class="">
                <button id="btn-like${part[i].id}" class="btn-like">
                    <img src="https://www.los.az/lucky/images/icon/heart-outline.svg" alt="">
                </button>
                <button id="btn-like-pro${part[i].id}" class="btn-like-pro">
                    <img src="https://www.los.az/lucky/images/icon/heart-filled.svg" alt="">
                </button>
              </div>
            </div>  
            <div class="box-img w-100">
              <a href="sale-comp.html"><img src="${part[i].img}" alt=""></a>
            </div>
            <div class="box-text w-100 ">
                <h5>${part[i].name}</h5>
                <span>${part[i].cost.toFixed(2)} Azn  </span>
                <button id="shopBtn${part[i].id}" class="shopsBtn">Səbətə at</button>
            </div>
          </div>
        </div>`
      )
    }

    else if(part[i].type == "Qida və İçkilər"){
      partData2.append(
        `<div class="col-lg-3 col-md-6 col-12 ">
          <div class="office-box-text">
            <div class=" office-like d-flex justify-content-between w-100 p-2">
              <div class=""></div>
              <div class="">
                <button id="btn-like${part[i].id}" class="btn-like">
                    <img src="https://www.los.az/lucky/images/icon/heart-outline.svg" alt="">
                </button>
                <button id="btn-like-pro${part[i].id}" class="btn-like-pro">
                    <img src="https://www.los.az/lucky/images/icon/heart-filled.svg" alt="">
                </button>
              </div>
            </div>  
            <div class="box-img w-100">
              <a href="sale-comp.html"><img src="${part[i].img}" alt=""></a>
            </div>
            <div class="box-text w-100 ">
                <h5>${part[i].name}</h5>
                <span>${part[i].cost.toFixed(2)} Azn </span>
                <button id="shopBtn${part[i].id}" class="shopsBtn">Səbətə at</button>
            </div>
          </div>
        </div>`
      )
    }

    else if(part[i].type == "new"){
      partData4.append(
        `<div class="col-lg-3 col-md-6 col-12 ">
          <div class="office-box-text">
            <div class=" office-like d-flex justify-content-between w-100 p-2">
              <div class="recoment-div">Tövsiyyə edilən</div>
              <div class="">
                <button id="btn-like${part[i].id}" class="btn-like">
                    <img src="https://www.los.az/lucky/images/icon/heart-outline.svg" alt="">
                </button>
                <button id="btn-like-pro${part[i].id}" class="btn-like-pro">
                    <img src="https://www.los.az/lucky/images/icon/heart-filled.svg" alt="">
                </button>
              </div>
            </div>  
            <div class="box-img w-100">
              <a href="sale-comp.html"><img src="${part[i].img}" alt=""></a>
            </div>
            <div class="box-text w-100 ">
                <h5>${part[i].name}</h5>
                <span>${part[i].cost.toFixed(2)} Azn  </span>
                <button id="shopBtn${part[i].id}" class="shopsBtn">Səbətə at</button>
            </div>
          </div>
        </div>`
      )

      partData6.append(
        `<div class="col-lg-3 col-md-6 col-12 ">
          <div class="office-box-text">
            <div class=" office-like d-flex justify-content-between w-100 p-2">
              <div class="new-div">Yeni</div>
              <div class="">
                <button id="btn-like${part[i].id}" class="btn-like">
                    <img src="https://www.los.az/lucky/images/icon/heart-outline.svg" alt="">
                </button>
                <button id="btn-like-pro${part[i].id}" class="btn-like-pro">
                    <img src="https://www.los.az/lucky/images/icon/heart-filled.svg" alt="">
                </button>
              </div>
            </div>  
            <div class="box-img w-100">
              <a href="sale-comp.html"><img src="${part[i].img}" alt=""></a>
            </div>
            <div class="box-text w-100 ">
                <h5>${part[i].name}</h5>
                <span>${part[i].cost.toFixed(2)} Azn  </span>
                <button id="shopBtn${part[i].id}" class="shopsBtn">Səbətə at</button>
            </div>
          </div>
        </div>`
      )

      partData7.append(
        `<div class="col-lg-3 col-md-6 col-12 ">
          <div class="office-box-text">
            <div class=" office-like d-flex justify-content-between w-100 p-2">
              <div class=""></div>
              <div class="">
                <button id="btn-like${part[i].id}" class="btn-like">
                    <img src="https://www.los.az/lucky/images/icon/heart-outline.svg" alt="">
                </button>
                <button id="btn-like-pro${part[i].id}" class="btn-like-pro">
                    <img src="https://www.los.az/lucky/images/icon/heart-filled.svg" alt="">
                </button>
              </div>
            </div>  
            <div class="box-img w-100">
              <a href="sale-comp.html"><img src="${part[i].img}" alt=""></a>
            </div>
            <div class="box-text w-100 ">
                <h5>${part[i].name}</h5>
                <span>${part[i].cost.toFixed(2)} Azn  </span>
                <button id="shopBtn${part[i].id}" class="shopsBtn">Səbətə at</button>
            </div>
          </div>
        </div>`
      )


    }

    partData3.append(
      `<div class="col-lg-4 col-md-6 col-12 ">
        <div class="office-box-text">
          <div class=" office-like d-flex justify-content-between w-100 p-2">
            <div class=""></div>
            <div class="">
              <button id="btn-like${part[i].id}" class="btn-like">
                  <img src="https://www.los.az/lucky/images/icon/heart-outline.svg" alt="">
              </button>
              <button id="btn-like-pro${part[i].id}" class="btn-like-pro">
                  <img src="https://www.los.az/lucky/images/icon/heart-filled.svg" alt="">
              </button>
            </div>
          </div>  
          <div class="box-img w-100">
            <a href="sale-comp.html"><img src="${part[i].img}" alt=""></a>
          </div>
          <div class="box-text w-100 ">
              <h5>${part[i].name}</h5>
              <span>${part[i].cost.toFixed(2)} Azn  </span>
              <button id="shopBtn${part[i].id}" class="shopsBtn">Səbətə at</button>
          </div>
        </div>
      </div>`
    )

    
    

    $(`#btn-like${i}`).click(function(){ 
      shopbtn += 1
      $(`#btn-like-pro${i}`).css("display", "block");
      $(`#btn-like${i}`).css("display", "none");
      $(".icon-number-like").text(shopbtn);
    })

    $(`#btn-like-pro${i}`).click(function(){
      shopbtn -= 1
      $(`#btn-like-pro${i}`).css("display", "none");
      $(`#btn-like${i}`).css("display", "block");  
      $(".icon-number-like").text(shopbtn);

    })

    $(`#shopBtn${i}`)

    $(`#shopBtn${i}`).click(function(){
      ingener += 1
      $(".icon-number").text(ingener)

      $(".tbody-box").append(
        `<tr>
          <th class="th-img">
              <h6>Şəkil:</h6>
              <img src="${part[i].img}" alt="">
          </th>
          <th class="th-name">
            <h6>Məhsul adı:</h6> 
            <p> ${part[i].name} </p>
          </th>
          <th class="th-cost">
              <h6>Qiymət:</h6>
              <span id="cost-span${i}"> ${part[i].cost.toFixed(2)} <br>Azn  </span>
          </th>
          <th class="th-num">
              <h6>Say:</h6>
              <div class="d-flex less-more">
                  <button class="th-less" id="less-btn${i}">-</button>
                  <input type="number" min="1" value="1" id="number-span${i}">
                  <button  class="th-more" id="more-btn${i}">+</button>
              </div>
          </th>
          <th class="th-color">
              <h6>Rəng:</h6>
            <p>${part[i].color}</p>
          </th>
          <th class="th-cost-num">
              <h6>Cəmi:</h6>
              <p><span id="costSpan${i}">${part[i].cost.toFixed(2)} </span> <br> Azn  </p>
          </th>
          <th class="th-remove">
              <button id="thActiveBtn${i}" class="th-active-btn">x</button>
              <button id="thRemoveBtn${i}" class="th-remove-btn" >sil</button>
          </th>
        </tr>`

        
      )

      $(`#thActiveBtn${i}`).click(function(){
        ingener -= 1
        $(".icon-number").text(ingener)
        $(`#thActiveBtn${i}`).parents("tr").remove();
        $(`#OrderCostSpan`).text("0.00")
      })

      $(`#thRemoveBtn${i}`).click(function(){
        $(`#thRemoveBtn${i}`).parents("tr").remove();
        $(`#OrderCostSpan`).text("0.00")
        ingener -= 1
        $(".icon-number").text(ingener)
      })

      let a = part[i].cost;
      let b = 1


      $(`#more-btn${i}`).click(function(){
        a += part[i].cost
        b += 1
        $(`#costSpan${i}`).text(a.toFixed(2))
        $(`#number-span${i}`).val(b)
        $(`#OrderCostSpan`).text($(`#costSpan${i}`).text())
      })

      $(`#less-btn${i}`).click(function(){
        if( 1 < $(`#number-span${i}`).val()){
          a -= part[i].cost
          b -= 1
          $(`#costSpan${i}`).text(a.toFixed(2))
          $(`#number-span${i}`).val(b)
          $(`#OrderCostSpan`).text($(`#costSpan${i}`).text())
        }
      })

      $(`#OrderCostSpan`).text($(`#costSpan${i}`).text())

    localStorage.setItem('items',JSON.stringify(part)) 
     
    console.log(part)
      
    });
    
  }

});


let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }

    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("navMenu").style = "display: flex ;";
      } else {
        document.getElementById("navMenu").style = "display: none ;";
      }

  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range-1");
let displayValTwo = document.getElementById("range-2");

let mingop = 0;

function slider1(){
        displayValOne.textContent = sliderOne.value;
}

function slider2(){
        displayValTwo.textContent = sliderTwo.value;
}



