import { UserOutlined } from '@ant-design/icons';
import { Avatar, Tag, Flex } from 'antd';

import styles from "./Resume.module.scss";

function Resume() {

    const tagStyle = {
        background: '#e0e0e0',
        padding: '5px 10px',
        margin: '5px',
        borderRadius: '5px',
        fontSize: '0.9em',
        color: '#333',
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.avatarContainer}>
                    <Avatar size={84} icon={<UserOutlined />} />
                </div>
                <h1 className={styles.name}>John Doe</h1>
                <p className={styles.title}>Frontend Developer</p>
                <p className={styles.contactInfo}>Email: johndoe@example.com | Phone: +123 456 7890 | LinkedIn:
                    linkedin.com/in/johndoe</p>
            </header>

            <section className={styles.profile}>
                <h2>Profile</h2>
                <p>Motivated frontend developer with 5+ years of experience creating responsive and user-friendly web
                    applications. Skilled in HTML, CSS, JavaScript, and React.</p>
            </section>

            <section className="experience">
                <h2>Work Experience</h2>
                <div className={styles.job}>
                    <h3>Senior Frontend Developer</h3>
                    <p className="company">Tech Solutions Inc. | Jan 2020 - Present</p>
                    <ul>
                        <li>Developed and maintained dynamic, responsive web applications using React and TypeScript.
                        </li>
                        <li>Collaborated with designers to create intuitive user interfaces.</li>
                        <li>Improved website performance by 30% through optimization techniques.</li>
                    </ul>
                </div>
                <div className={styles.job}>
                    <h3>Frontend Developer</h3>
                    <p className="company">Creative Web Co. | Jun 2017 - Dec 2019</p>
                    <ul>
                        <li>Designed and implemented reusable UI components.</li>
                        <li>Worked closely with backend developers to integrate APIs.</li>
                        <li>Ensured cross-browser compatibility and accessibility compliance.</li>
                    </ul>
                </div>
            </section>

            <section className={styles.education}>
                <h2>Education</h2>
                <p><strong>Bachelor of Computer Science</strong> | University of Technology | 2013 - 2017</p>
            </section>

            <section className={styles.skills}>
                <h2>Skills</h2>
                <ul className={styles.skillList}>
                    <Flex gap="4px 0" wrap>
                        <Tag style={tagStyle} bordered={false} color="grey">HTML5, CSS3, JavaScript</Tag>
                        <Tag style={tagStyle} bordered={false} color="grey">React, Redux, TypeScript</Tag>
                        <Tag style={tagStyle} bordered={false} color="grey">Git, Webpack, REST APIs</Tag>
                        <Tag style={tagStyle} bordered={false} color="grey">Responsive Design, Accessibility</Tag>
                        <Tag style={tagStyle} bordered={false} color="grey">Responsive Design, Accessibility</Tag>
                        <Tag style={tagStyle} bordered={false} color="grey">Responsive Design, Accessibility</Tag>
                    </Flex>
                </ul>
            </section>

            <footer className="footer">
                <p>References available upon request</p>
            </footer>
        </div>
    );
}

export default Resume;