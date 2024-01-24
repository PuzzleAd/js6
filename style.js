

export const main_container = document.getElementsByTagName("main")[0];
main_container.style.backgroundColor = "#252B42";
main_container.style.paddingTop = "184px";
main_container.style.paddingBottom = "80px";
main_container.style.display = "flex";
main_container.style.flexDirection = "column";
main_container.style.alignItems = "center";
main_container.style.width = "100%";

export const main_container_text = document.createElement("div");
main_container.appendChild(main_container_text);
main_container_text.style.display = "flex";
main_container_text.style.flexDirection = "column";
main_container_text.style.alignItems = "center";
main_container_text.style.gap = "40px";
main_container_text.style.paddingTop = "40px";
main_container_text.style.paddingBottom = "40px";

export function top_text(
    textContent,
    width,
    height,
    color,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight
) {
    const heading = document.createElement("h1");
    main_container_text.appendChild(heading);
    heading.textContent = textContent;
    heading.style.width = width;
    heading.style.height = height;
    heading.style.color = color;
    heading.style.fontFamily = fontFamily;
    heading.style.fontSize = fontSize;
    heading.style.fontWeight = fontWeight;
    heading.style.lineHeight = lineHeight;
    heading.style.textAlign = "center";
}

export const button_container = document.createElement("div")
main_container.appendChild(button_container);
button_container.style.display = "flex";
button_container.style.gap = "10px"


export function button(
    textContent,
    width,
    height,
    backgroundColor,
    color,
    border,
    borderRadius,
    fontFamily,
    fontSize,
    fontWeight
) {
    const button = document.createElement("button")
    button_container.appendChild(button);
    button.textContent = textContent;
    button.style.width = width;
    button.style.height = height;
    button.style.backgroundColor = backgroundColor;
    button.style.color = color;
    button.style.border = border;
    button.style.borderRadius = borderRadius;
    button.style.fontFamily = fontFamily;
    button.style.fontSize = fontSize;
    button.style.fontWeight = fontWeight;
}

export const card_container = document.createElement("div");
main_container.appendChild(card_container);
card_container.style.display = "flex";
card_container.style.gap = "30px";
card_container.style.marginTop = "120px";

export function card(
    backgroundColor,
    imgurl,
    divbackgroundColor,
    textContent,
    topTextColor,
    bottomTextColor,
    rectangleColor,
) {
    const card = document.createElement("div");
    card_container.appendChild(card);
    card.style.width = "328px"
    card.style.height = "292px";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.gap = "20px";
    card.style.backgroundColor = backgroundColor;
    card.style.paddingBottom = "35px";
    card.style.paddingTop = "35px";
    card.style.paddingLeft = "40px";
    card.style.paddingRight = "40px";
    card.style.boxShadow = "0px 13px 19px 0px rgba(0, 0, 0, 0.07)";
    const img_container = document.createElement("div");
    card.appendChild(img_container);
    img_container.style.width = "70px";
    img_container.style.height = "76px";
    img_container.style.borderRadius = "10px"
    img_container.style.backgroundColor = divbackgroundColor;
    img_container.style.display = "flex";
    img_container.style.alignItems = "center";
    img_container.style.justifyContent = "center";
    const image = document.createElement("img");
    img_container.appendChild(image);
    image.src = imgurl;
    const top_text = document.createElement("h1");
    card.appendChild(top_text);
    top_text.textContent = textContent;
    top_text.style.color = topTextColor;
    top_text.style.fontFamily = "Montserrat";
    top_text.style.fontSize = "16px";
    top_text.style.fontWeight = "700";
    top_text.style.lineHeight = "24px";
    const rectangle = document.createElement("div");
    card.appendChild(rectangle);
    rectangle.style.width = "50px";
    rectangle.style.height = "2px";
    rectangle.style.border = "none"; 
    rectangle.style.backgroundColor = rectangleColor;
    const bottom_text = document.createElement("p");
    card.appendChild(bottom_text);
    bottom_text.textContent = "The gradual accumulation of information about atomic and small-scale behaviour...";
    bottom_text.style.color = bottomTextColor;
    bottom_text.style.fontFamily = "Montserrat";
    bottom_text.style.fontSize = "14px";
    bottom_text.style.fontWeight = "400";
    bottom_text.style.lineHeight = "20px";  
}

export const footer_container = document.getElementsByTagName("footer")[0];
footer_container.style.display = "flex";
footer_container.style.flexDirection = "column";
footer_container.style.alignItems = "center";
footer_container.style.gap = "80px";
footer_container.style.paddingTop = "160px";
footer_container.style.paddingBottom = "160px";

export const footer_container_text = document.createElement("div");
footer_container.appendChild(footer_container_text);
footer_container_text.style.display = "flex";
footer_container_text.style.flexDirection = "column";
footer_container_text.style.alignItems = "center";
footer_container_text.style.gap = "15px";


export function footerTopText(
    textContent,
    width,
    height,
    color,
    fontSize,
    lineHeight
){
    const text = document.createElement("h1");
    footer_container_text.appendChild(text);
    text.textContent = textContent;
    text.style.width = width;
    text.style.height = height;
    text.style.color = color;
    text.style.fontSize = fontSize;
    text.style.lineHeight = lineHeight;
    text.style.textAlign = "center";
}

export const footer_input = document.createElement("div");
footer_container.appendChild(footer_input);
footer_input.style.display = "flex";

export const input_left = document.createElement("div");
footer_input.appendChild(input_left);
input_left.style.width = "688px";
input_left.style.height = "58px";
input_left.style.display = "flex";
input_left.style.alignItems = "center";
input_left.style.paddingLeft = "15px";
input_left.style.backgroundColor = "#F9F9F9";
input_left.style.border = "1px solid #E6E6E6"
input_left.style.borderTopLeftRadius = "5px";
input_left.style.borderBottomLeftRadius = "5px";

export const input_text = document.createElement("p");
input_left.appendChild(input_text);
input_text.textContent = "Your Email";
input_text.style.width = "77px";
input_text.style.height = "28px";
input_text.style.color = "#737373";


export const input_right = document.createElement("button");
footer_input.appendChild(input_right);
input_right.style.width = "117px";
input_right.style.height = "58px";
input_right.style.border = "1px solid #E6E6E6";
input_right.style.borderTopRightRadius = "5px";
input_right.style.borderBottomRightRadius = "5px"
input_right.style.backgroundColor = "#23A6F0";
input_right.textContent = "Subscribe";
input_right.style.color = "white";