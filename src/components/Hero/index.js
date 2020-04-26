import React from 'react';
import css from './Hero.scss';
import Section from '../Section';
import classNames from 'classnames'

export default function Hero({ children, className }) {
    return (
        <Section className={classNames([css.hero, className])}>
            {children}
        </Section>
    )
}
