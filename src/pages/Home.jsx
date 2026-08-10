import { Container, Button, Row, Col } from "react-bootstrap";

function Home() {
    const tours = [
        {
            date: "JUL16",
            location: "DETROIT, MI",
            venue: "DTE ENERGY MUSIC THEATRE",
        },
        {
            date: "JUL19",
            location: "TORONTO, ON",
            venue: "BUDWEISER STAGE",
        },
        {
            date: "JUL22",
            location: "BRISTOW, VA",
            venue: "JIGGY LUBE LIVE",
        },
        {
            date: "JUL29",
            location: "PHOENIX, AZ",
            venue: "AK-CHIN PAVILION",
        },
        {
            date: "AUG 2",
            location: "LAS VEGAS, NV",
            venue: "T-MOBILE ARENA",
        },
        {
            date: "AUG 7",
            location: "CONCORD, CA",
            venue: "CONCORD PAVILION",
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section
                className="text-center text-white"
                style={{
                    backgroundColor: "#777",
                    minHeight: "290px",
                    padding: "10px 20px 40px",
                }}
            >
                <h1
                    style={{
                        fontSize: "4.5rem",
                        fontWeight: "700",
                        marginBottom: "40px",
                    }}
                >
                    The Generics
                </h1>

                <Button
                    variant="outline-info"
                    size="lg"
                    className="text-white mb-3"
                >
                    Get our Latest Album
                </Button>

                <div>
                    <Button
                        variant="outline-info"
                        className="rounded-circle"
                        style={{
                            width: "62px",
                            height: "62px",
                            fontSize: "24px",
                        }}
                    >
                        ▶
                    </Button>
                </div>
            </section>

            {/* Tours Section */}
            <section className="py-5">
                <Container>
                    <h2
                        className="text-center mb-4"
                        style={{ fontWeight: "700" }}
                    >
                        TOURS
                    </h2>

                    <div className="mx-auto" style={{ maxWidth: "670px" }}>
                        {tours.map((tour) => (
                            <Row
                                key={`${tour.date}-${tour.location}`}
                                className="align-items-center py-2 border-bottom"
                            >
                                <Col xs={2}>
                                    <strong>{tour.date}</strong>
                                </Col>

                                <Col xs={3}>
                                    {tour.location}
                                </Col>

                                <Col xs={4}>
                                    {tour.venue}
                                </Col>

                                <Col xs={3} className="text-end">
                                    <Button
                                        variant="info"
                                        size="sm"
                                        className="text-white fw-bold"
                                    >
                                        BUY TICKETS
                                    </Button>
                                </Col>
                            </Row>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Home;