// Thay đổi nội dung búc thư ở đây
var letterContent ="  TẠI SAO ANH YÊU EM? Anh đã tìm được chính mình trong em—một con người đặc biệt, xinh đẹp, tử tế, đáng yêu và hiền lành. Dù mới gặp em chưa lâu, nhưng em đã khiến anh hiểu thế nào là thực sự có cảm xúc với một người. Em làm anh tin rằng vẫn còn những người có cùng tần số với anh trong tình yêu. Em khiến anh nhận ra rằng thích một người có thể thú vị đến nhường nào, rằng việc theo đuổi và cố gắng để được bên nhau, dù chỉ trong giây lát, cũng là một trải nghiệm đẹp và đầy ý nghĩa. Anh sẽ luôn trân trọng cảm xúc này."








"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})
