import React from 'react'
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from '../common/components/title/Title.jsx'
import {Social} from "./Social/Social";
import GithubIco from '../assets/icons/github_ico.png'
import LinkedInIco from '../assets/icons/linkedin_ico.png'
import FaceBookIco from '../assets/icons/facebook_ico.png'
import CodewarsIco from '../assets/icons/codewars_ico.png'
import {v1} from "uuid";

const socials = [
  {
    id: v1(),
    title: 'GitHUB',
    style: {backgroundImage: `url(${GithubIco})`},
    link: 'https://github.com/Smovg-by',
  },
  {
    id: v1(),
    title: 'Codewars',
    style: {backgroundImage: `url(${CodewarsIco})`},
    link: 'https://github.com/Smovg-by',
  },
  {
    id: v1(),
    title: 'LinkedIn',
    style: {backgroundImage: `url(${LinkedInIco})`},
    link: 'https://github.com/Smovg-by',
  },
  {
    id: v1(),
    title: 'Facebook',
    style: {backgroundImage: `url(${FaceBookIco})`},
    link: 'https://github.com/Smovg-by',
  },
]

export const Footer = () => {
  return (
    <div className={style.footerBlock}>
      <div className={`${styleContainer.container} ${style.footerContainer}`}>
        <Title title={'Social media'}/>
        <div className={style.socialsContainer}>
          {socials.map((social) => {
            return (
              <Social key={social.id}
                      title={social.title}
                      style={social.style}
                      link={social.link}
              />
            )
          })}
        </div>
        <h3 className={style.copyright}>© 2021 All right reserved</h3>
      </div>
    </div>
  )
}
