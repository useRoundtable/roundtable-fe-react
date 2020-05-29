export const enterRoundtable = (e, target) => {
    e.preventDefault();
    document.body.classList.add("editing");
    setTimeout(() => {
    	window.location.assign(target);
    }, 250);
};

export const exitRoundtable = (e, target) => {
    e.preventDefault();
    document.body.classList.remove("editing");
    setTimeout(() => {
    	window.location.assign(target);
    }, 250);
};