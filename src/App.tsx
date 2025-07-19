import React from 'react';
import { Navbar, Nav, Container, Button, Row, Col, Card } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Dify業務改善LP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">特徴</Nav.Link>
              <Nav.Link href="#benefits">メリット</Nav.Link>
              <Nav.Link href="#contact">お問い合わせ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="hero" className="hero-section text-center bg-primary text-white py-5">
        <Container>
          <h1>Difyで業務を劇的に改善・効率化</h1>
          <p className="lead">AIを活用したDifyで、あなたのビジネスは新たなステージへ</p>
          <Button variant="light" size="lg" href="#contact">今すぐ無料相談</Button>
        </Container>
      </section>

      {/* Problem and Solution Section */}
      <section id="problem-solution" className="py-5">
        <Container>
          <h2 className="text-center mb-4">こんなお悩みありませんか？</h2>
          <Row className="mb-5">
            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>手作業が多く、時間がかかる</Card.Title>
                  <Card.Text>データ入力、レポート作成、顧客対応など、日々の業務に追われていませんか？</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>情報が散在し、共有が難しい</Card.Title>
                  <Card.Text>必要な情報を見つけるのに時間がかかったり、チーム内での情報共有がスムーズにいかないことはありませんか？</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>顧客対応の品質にばらつきがある</Card.Title>
                  <Card.Text>顧客からの問い合わせ対応に時間がかかったり、担当者によって対応品質に差が出ていませんか？</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>新しい技術導入に不安がある</Card.Title>
                  <Card.Text>AIなどの最新技術を導入したいけれど、何から始めていいか分からない、費用対効果が不安ではありませんか？</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <h2 className="text-center mb-4">Difyがすべて解決します！</h2>
          <p className="text-center lead">Difyは、これらの課題をAIの力で根本から解決し、あなたのビジネスを加速させます。</p>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-5">Difyの主な機能</h2>
          <Row>
            <Col md={4}>
              <Card className="text-center mb-4">
                <Card.Body>
                  <Card.Title>ノーコードAIアプリ開発</Card.Title>
                  <Card.Text>プログラミング知識不要で、AIアプリケーションを簡単に構築・デプロイできます。</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center mb-4">
                <Card.Body>
                  <Card.Title>多様なAIモデル連携</Card.Title>
                  <Card.Text>ChatGPT、Claudeなど、様々なAIモデルと連携し、最適なソリューションを提供します。</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center mb-4">
                <Card.Body>
                  <Card.Title>データ連携と自動化</Card.Title>
                  <Card.Text>既存システムやデータソースと連携し、業務プロセスを自動化します。</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-5">
        <Container>
          <h2 className="text-center mb-5">Dify導入のメリット</h2>
          <Row>
            <Col md={4}>
              <Card className="text-center mb-4">
                <Card.Body>
                  <Card.Title>コスト削減</Card.Title>
                  <Card.Text>手作業の削減と業務効率化により、人件費や運用コストを大幅に削減します。</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center mb-4">
                <Card.Body>
                  <Card.Title>生産性向上</Card.Title>
                  <Card.Text>AIによる自動化で、従業員はより創造的で価値の高い業務に集中できます。</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center mb-4">
                <Card.Body>
                  <Card.Title>顧客満足度向上</Card.Title>
                  <Card.Text>AIチャットボットなどによる24時間365日の迅速な顧客対応を実現します。</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="bg-primary text-white text-center py-5">
        <Container>
          <h2>Difyであなたのビジネスを次のレベルへ</h2>
          <p className="lead">無料相談で、Difyがあなたの業務にどう貢献できるかお話ししましょう。</p>
          <Button variant="light" size="lg">お問い合わせはこちら</Button>
        </Container>
      </section>

      <footer className="text-white text-center py-3" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <p>&copy; 2025 Dify業務改善LP. All Rights Reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;