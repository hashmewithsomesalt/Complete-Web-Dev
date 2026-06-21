function setPermissionLevel(permissionLevel = "admin", ...names) {
    //names will act as a list
    names.forEach((name) => console.log(`${name} now has ${permissionLevel} level permission`))
}
setPermissionLevel("admin","Aryan")
setPermissionLevel("manager","Aryan", "sui", "ui", "wio")
setPermissionLevel("user","Aryan", "Ritesh")
setPermissionLevel(null, "ritesh")

//rest parameter must be the last formal parameter