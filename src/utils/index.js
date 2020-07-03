export const enterRoundtable = (e, target) => {
    e.preventDefault();
    document.body.classList.add("editing");
    setTimeout(() => {
    	window.location.assign(target);
    }, 250);
};

export const roundtableOpened = (e, target) => {
    e.preventDefault();
    document.body.classList.add("roundtableOpen");
    setTimeout(() => {
    	window.location.assign(target);
    }, 0);
};

export const exitRoundtable = (e, target) => {
    e.preventDefault();
    document.body.classList.remove("editing","roundtableOpen");
    setTimeout(() => {
    	window.location.assign(target);
    }, 250);
};