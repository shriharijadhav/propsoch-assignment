export const getColorBasedOnRating = (rating)=>{
    if (rating===5) {
        return "#278717"
    } else if(rating>=3 && rating<5){
        return "#E57601"
    }else{
        return "#F32B2B"
    }
}