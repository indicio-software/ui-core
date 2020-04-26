import React from 'react';
import { Container, Row, Col } from 'reactstrap'
export default function Section({ className, children }) {
    return (
        <section className={className}>
            <Container>
                {children}
            </Container>
        </section>
    )
};
