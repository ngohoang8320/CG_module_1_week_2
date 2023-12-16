function random_image() {
    let img_number = Math.ceil(Math.random() * 3)
    let img_top_rand = './img/img' + img_number + '_1.jpg'
    img_number = Math.ceil(Math.random() * 3)
    let img_mid_rand = './img/img' + img_number + '_2.jpg'
    img_number = Math.ceil(Math.random() * 3)
    let img_bot_rand = './img/img' + img_number + '_3.jpg'

    document.getElementById('img1').src = img_top_rand
    document.getElementById('img2').src = img_mid_rand
    document.getElementById('img3').src = img_bot_rand
}

function changef_top() {
    let top_img = document.getElementById('img1').src
    

    if(top_img.includes('img1_1.jpg')) {
        top_img = './img/img2_1.jpg'
        display_top(top_img)
    }
    else if(top_img.includes('img2_1.jpg')) {
        top_img = './img/img3_1.jpg'
        display_top(top_img)
    }
    else {
        top_img = './img/img1_1.jpg'
        display_top(top_img)
    }  
}

function changef_mid() {
    let mid_img = document.getElementById('img2').src
    
    if(mid_img.includes('img1_2.jpg')) {
        mid_img = './img/img2_2.jpg'
        display_mid(mid_img)
    }
    else if(mid_img.includes('img2_2.jpg')) {
        mid_img = './img/img3_2.jpg'
        display_mid(mid_img)
    }
    else {
        mid_img = './img/img1_2.jpg'
        display_mid(mid_img)
    }
}

function changef_bot() {
    let bot_img = document.getElementById('img3').src
    
    if(bot_img.includes('img1_3.jpg')) {
        bot_img = './img/img2_3.jpg'
        display_bot(bot_img)
    }
    else if(bot_img.includes('img2_3.jpg')) {
        bot_img = './img/img3_3.jpg'
        display_bot(bot_img)
    }
    else {
        bot_img = './img/img1_3.jpg'
        display_bot(bot_img)
    }
}

function display_top(top_i_name) {
    document.getElementById('img1').src = top_i_name
    check_img()
}

function display_mid(top_i_name) {
    document.getElementById('img2').src = top_i_name
    check_img()
}

function display_bot(top_i_name) {
    document.getElementById('img3').src = top_i_name
    check_img()
}

function check_img() {
    let top_img = document.getElementById('img1').src
    let mid_img = document.getElementById('img2').src
    let bot_img = document.getElementById('img3').src

    if(top_img.includes('img1_') && mid_img.includes('img1_') && bot_img.includes('img1_')) {
        setTimeout('results()', 500)        
    }
    else if(top_img.includes('img2_') && mid_img.includes('img2_') && bot_img.includes('img2_')) {
        setTimeout('results()', 500)        
    }
    else if(top_img.includes('img3_') && mid_img.includes('img3_') && bot_img.includes('img3_')) {
        setTimeout('results()', 500)        
    }
    else {
        /* document.getElementById('img1').style.border = '2px solid black'
        document.getElementById('img2').style.border = '2px solid black'
        document.getElementById('img3').style.border = '2px solid black;' */

    for(let i = 0; i <=2; i++) {
            document.getElementsByClassName('img_p')[i].style.border = '2px solid black'
        }
    }
    document.getElementById('congrats').style.display = 'none'
}

function results() {
    /* document.getElementById('img1').style.border = 'none'
    document.getElementById('img2').style.border = 'none'
    document.getElementById('img3').style.border = 'none' */
    for(let i = 0; i <=2; i++) {
        document.getElementsByClassName('img_p')[i].style.border = 'none'
    }
    document.getElementById('congrats').style = 'display: block; text-align: center;'
}