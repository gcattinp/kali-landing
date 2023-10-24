document.getElementById('file').addEventListener('click', function(event) {
  toggleDropdown(event, 'dropdown-menu', 'edit-dropdown-menu');
});
document.getElementById('edit').addEventListener('click', function(event) {
  toggleDropdown(event, 'edit-dropdown-menu', 'dropdown-menu');
});
document.addEventListener('click', closeDropdownOnOutsideClick);

function toggleDropdown(event, dropdownId, otherDropdownId) {
  var menu = document.getElementById(dropdownId);
  var otherMenu = document.getElementById(otherDropdownId);

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
    otherMenu.style.display = "none";
  }

  event.stopPropagation();
}

function closeDropdownOnOutsideClick(event) {
  var fileMenu = document.getElementById('dropdown-menu');
  var editMenu = document.getElementById('edit-dropdown-menu');
  var file = document.getElementById('file');
  var edit = document.getElementById('edit');

  if (!fileMenu.contains(event.target) && !file.contains(event.target)) {
    fileMenu.style.display = "none";
  }

  if (!editMenu.contains(event.target) && !edit.contains(event.target)) {
    editMenu.style.display = "none";
  }
}
