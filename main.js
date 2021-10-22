const linksSocialMedia = {
  linkedin: 'in/otafaria',
  facebook: 'otavio.a.faria',
  github: 'k1wizera'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `http://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()
