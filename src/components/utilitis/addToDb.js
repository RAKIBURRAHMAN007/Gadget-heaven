import { toast } from "react-toastify";



const getStoredCartList = () => {
    const storedCartListStr = localStorage.getItem('Cart-list')
    if (storedCartListStr) {
        const storedCartList = JSON.parse(storedCartListStr)
        return storedCartList;
    }
    else {
        return [];
    }

}
const addToStoredCartList = (id) => {
    const storedCartList = getStoredCartList();
    if(storedCartList.includes(id)){
        toast.error('Product Already Added In Cart')
        return
    }
    else{
        storedCartList.push(id);
        toast.success('Product Added In Cart')

    }
    
    const storedCartListStr = JSON.stringify(storedCartList);
    localStorage.setItem('Cart-list', storedCartListStr);
    
   



}
const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr)
        return storedWishList;


    }
    else {
        return [];
    }

}
const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        
        toast.error('This Product Already Added In Wishlist')
       
        return
    }
    else {
        storedWishList.push(id);
        toast.success('Product Added In Wishlist')
    }
    const storedWishListStr = JSON.stringify(storedWishList)
    localStorage.setItem('wish-list', storedWishListStr)
}
export { addToStoredCartList, addToStoredWishList, getStoredCartList,getStoredWishList }