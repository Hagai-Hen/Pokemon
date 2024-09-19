import { colors } from "./colors";

export const createContentElement = (title: string, icon: string, width: string = '', height: string = '') => {
    
    const contentElement = document.createElement("div");
    contentElement.style.position = "relative";
    contentElement.style.textAlign = "center";

    const iconElement = document.createElement("img");
    iconElement.src = icon;
    iconElement.style.width = width;
    iconElement.style.height = height;
  
    const titleElement = document.createElement("div");
    titleElement.innerText = title;
    titleElement.style.color = colors.primary
  
    contentElement.appendChild(titleElement);
    contentElement.appendChild(iconElement);

    return contentElement;
}