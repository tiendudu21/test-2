let noButtonClickCount = 0;
let noButtonState = 0;

// Hiển thị GIF ban đầu
document.getElementById("gifContainer").style.display = "block";

// Hàm reset trạng thái về mặc định
function resetState() {
    noButtonClickCount = 0;
    noButtonState = 0;
    document.getElementById("noBtn").innerHTML = "Không";
    document.getElementById("noBtn").style.backgroundColor = "";
    document.getElementById("noBtn").style.display = "block";

    document.getElementById("siBtn").style.fontSize = "40px";
    document.getElementById("siBtn").style.padding = "20px 40px";
    document.getElementById("siBtn").style.display = "block";

    document.getElementById("question").style.display = "block";
    document.getElementById("messageContainer").style.display = "none";

    const allGifContainers = [
        "gifContainer",
        "happyGifContainer",
        "happyGifContainer2",
        "happyGifContainer3",
        "happyGifContainer4",
        "sadGifContainer",
        "sadGifContainer1",
        "sadGifContainer2",
    ];
    allGifContainers.forEach((id) => {
        document.getElementById(id).style.display = "none";
    });

    document.getElementById("gifContainer").style.display = "block";
    document.body.classList.remove("bg-green");
}

// Xử lý khi nhấn "Em đồng ý"
document.getElementById("siBtn").addEventListener("click", function () {
    document.getElementById("sadGifContainer").style.display = "none";
    document.getElementById("sadGifContainer1").style.display = "none";
    document.getElementById("sadGifContainer2").style.display = "none";
    document.getElementById("gifContainer").style.display = "none";
    document.getElementById("happyGifContainer").style.display = "block";

    document.getElementById("question").style.display = "none";
    document.getElementById("siBtn").style.display = "none";
    document.body.classList.add("bg-green");
    document.getElementById("noBtn").style.display = "none";

    document.getElementById("messageContainer").style.display = "block";
    document.getElementById("messageContainer").innerHTML =
        "Anh biết là em sẽ đồng ý làm người yêu anh mà<33";

    setTimeout(function () {
        document.getElementById("happyGifContainer").style.display = "none";
        document.getElementById("happyGifContainer2").style.display = "block";
    }, 1000);

    setTimeout(function () {
        document.getElementById("happyGifContainer2").style.display = "none";
        document.getElementById("happyGifContainer3").style.display = "block";
    }, 2000);

    setTimeout(function () {
        document.getElementById("happyGifContainer3").style.display = "none";
        document.getElementById("happyGifContainer4").style.display = "block";

        // Hiển thị nút hình trái tim khi đến GIF cuối cùng
        document.getElementById("heartBtn").style.display = "block";
    }, 3000);
});

// Xử lý khi nhấn "Không"
document.getElementById("noBtn").addEventListener("click", function () {
    switch (noButtonState) {
        case 0:
            document.getElementById("happyGifContainer").style.display = "none";
            document.getElementById("gifContainer").style.display = "none";
            document.getElementById("sadGifContainer").style.display = "block";

            document.getElementById("noBtn").innerHTML = "Không!";
            document.getElementById("noBtn").style.backgroundColor = "#F1330A";

            noButtonClickCount++;
            noButtonState++;
            break;

        case 7:
            if (confirm("EM THẬT SỰ KHÔNG YÊU ANH SAO?")) {
                resetState();
            }
            break;

        default:
            noButtonState++;
            break;
    }
});

// Xử lý khi nhấn nút hình trái tim
document.getElementById("heartBtn").addEventListener("click", function () {
    window.location.href = "../form2/main2.html"; // Đường dẫn đến form mới
});
