document.getElementById('file').addEventListener('click', toggleDropdown);
document.addEventListener('click', closeDropdownOnOutsideClick);

function toggleDropdown(event) {
  var menu = document.getElementById('dropdown-menu');
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
  event.stopPropagation();  // Prevent this click from triggering the document click event handler below
}

function closeDropdownOnOutsideClick(event) {
  var menu = document.getElementById('dropdown-menu');
  var file = document.getElementById('file');
  if (!menu.contains(event.target) && !file.contains(event.target)) {
    menu.style.display = "none";
  }
}
