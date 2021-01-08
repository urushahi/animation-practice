import $ from 'jquery';
const DropDowns = () => {
    $('.dropdown-submenu a.test').on("click", function(e){
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
    });

}
export default DropDowns