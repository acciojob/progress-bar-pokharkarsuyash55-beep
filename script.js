//your JS code here. If required.

let circles=document.querySelectorAll(".circle");
let next=document.getElementById("next");
let previous=document.getElementById("prev");
let progress=document.getElementById("progress");

let currentStep=1;

next.addEventListener("click",()=>{
	if(currentStep<circles.length){
		currentStep++;
		updateProgress();
	}
})

previous.addEventListener("click",()=>{
	if(currentStep>1){
		currentStep--;
		updateProgress();
	}
})

function updateProgress() {
	circles.forEach((circle,index)=>{
		if(index<currentStep){
			circle.classList.add("active");
		}else{
			circle.classList.remove("active");
		}
	});

	 let percentage = ((currentStep - 1) / (circles.length - 1)) * 100;

    progress.style.width = percentage + "%";

    previous.disabled = currentStep === 1;
    next.disabled = currentStep === circles.length;
}