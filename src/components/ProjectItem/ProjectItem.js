import React from 'react';
import className from 'classnames/bind';
import Button from '../Button/Button';
import ImageDisplay from './ImageDisplay/ImageDisplay';
import styles from './ProjectItem.module.scss';

const cx = className.bind(styles);

const ProjectItem = ({ project }) => {
    return (
      <div className={styles['project-item']}>
        <h2 className={styles['project-item__title']}>{project.name}</h2>
        <div className={styles['project-item__display']}>
          <ImageDisplay thumbnail={project.thumbnail} />
          <div className={styles['project-item__button-container']}>
            {project.github &&
              <Button url={project.github} classes={cx('btn btn__project', {
                'btn__private': project.privateRepo
              })}>{project.privateRepo ? 'Private Repo' : 'GitHub'}</Button>
            }
            {project.website &&
              <Button url={project.website} classes="btn btn__project">{project.name}</Button>
            }
          </div>
        </div>
        <p className={styles['project-item__description']}>{project.description}</p>
        <div style={{textAlign: 'center'}}>
          <p className={styles['project-item__tag']}>Built with: </p> {project.tags.map(tag => {
            return <p key={tag} style={tagStyles}>{tag}</p>
          })}
        </div>
      </div>
    );
}

const tagStyles = {
  display: 'inline-block',
  margin: '5px',
  padding: '5px',
  background: 'rgba(44,186,219, 0.2)',
  borderRadius: '5px',
  color: '#2cbadb',
  fontSize: '.8rem'
}

export default ProjectItem;