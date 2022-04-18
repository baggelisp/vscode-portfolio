import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'baggelisp.github.io',
    href: 'https://baggelisp.github.io/',
  },
  {
    social: 'email',
    link: 'baggelisp.keph@gmail.com',
    href: 'mailto:baggelisp.keph@gmail.com',
  },
  {
    social: 'github',
    link: 'baggelisp',
    href: 'https://github.com/baggelisp',
  },
  {
    social: 'linkedin',
    link: 'Vangelis Spathonis',
    href: 'https://www.linkedin.com/in/vangelis-spathonis-a16b80146/',
  },
  {
    social: 'twitter',
    link: 'baggelis spa',
    href: 'https://twitter.com/baggelas',
  },
  {
    social: 'instagram',
    link: 'baggelis_sp',
    href: 'https://www.instagram.com/baggelis_sp/',
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
