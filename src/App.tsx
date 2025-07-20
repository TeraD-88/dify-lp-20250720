import React from 'react';
import { Navbar, Nav, Container, Button, Row, Col, Card } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Dify導入支援</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#problem">よくあるお悩み</Nav.Link>
              <Nav.Link href="#features">実現できること</Nav.Link>
              <Nav.Link href="#benefits">導入メリット</Nav.Link>
              <Nav.Link href="#contact">無料相談</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="hero" className="hero-section text-center py-6">
        <Container>
          <h1 className="display-4 fw-bold text-dark">その反復作業、AIに任せませんか？</h1>
          <p className="lead text-dark">
            Difyなら、問い合わせ対応、データ入力、情報収集といった定型業務をAIが代行。<br />
            コーディング不要で、即日、あなたの会社に最適化されたAIツールを導入できます。
          </p>
          <Button variant="light" size="lg" href="#contact">まずは無料で資料を見てみる</Button>
        </Container>
      </section>

      {/* Problem and Solution Section */}
      <section id="problem" className="py-6 bg-light-gray">
        <Container>
          <h2 className="text-center mb-4">貴社では、こんなお悩みありませんか？</h2>
          <Row className="mb-5 justify-content-center">
            <Col md={5}>
              <Card className="mb-3 h-100 card-uniform-height">
                <Card.Body>
                  <Card.Title>🤔 帳票作成や手作業が多く、コア業務に集中できない</Card.Title>
                  <Card.Text>訪問介護計画書や日々のレポート作成に時間を取られ、本来やるべき利用者様へのケアや戦略的な業務が進まない。</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={5}>
              <Card className="mb-3 h-100 card-uniform-height">
                <Card.Body>
                  <Card.Title>😩 顧客対応に追われ、品質もバラバラ</Card.Title>
                  <Card.Text>似たような問い合わせに何度も対応。担当者によって回答の質が異なり、顧客満足度が上がらない。</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={5}>
              <Card className="mt-3 h-100 card-uniform-height">
                <Card.Body>
                  <Card.Title>😥 情報がバラバラで、探すだけで一苦労</Card.Title>
                  <Card.Text>必要な資料がどこにあるか分からず、探すだけで時間が溶けていく。チームでの情報共有も非効率。</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={5}>
              <Card className="mt-3 h-100 card-uniform-height">
                <Card.Body>
                  <Card.Title>😟 AI導入はしたいが、何から始めれば…</Card.Title>
                  <Card.Text>「AIが便利」とは聞くけれど、開発コストや専門知識が壁となり、導入に踏み切れないでいる。</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="text-center">
            <h2 className="mb-4">そのお悩み、Difyが解決の糸口を見つけます。</h2>
            <p className="lead">Difyは、AIの力を最大限に引き出し、誰でも簡単に業務を自動化できるプラットフォームです。</p>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="py-6">
        <Container>
          <h2 className="text-center mb-5">Difyで実現できること</h2>
          <Row>
            <Col md={4}>
              <Card className="text-center mb-4 h-100 card-uniform-height">
                <Card.Body>
                  <Card.Title>介護記録・帳票作成をAIで効率化</Card.Title>
                  <Card.Text>訪問介護計画書、ケアプラン、モニタリング報告書など、定型的な帳票作成をAIがサポート。入力時間を大幅に削減し、ヒューマンエラーを防ぎます。</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center mb-4 h-100 card-uniform-height">
                <Card.Body>
                  <Card.Title>議事録・SNS投稿など専用ボットを構築</Card.Title>
                  <Card.Text>会議の議事録を自動で文字起こし・要約するボットや、SNS投稿案を複数生成するボットなど、特定の業務に特化したAIツールを簡単に作成できます。</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center mb-4 h-100 card-uniform-height">
                <Card.Body>
                  <Card.Title>最新AIモデルを自由に選択</Card.Title>
                  <Card.Text>GPT-4oやClaude 3など、常に最新・最適なAIモデルを業務内容に合わせて使い分け、最高のパフォーマンスを引き出します。</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-6 bg-light-gray">
        <Container>
          <h2 className="text-center mb-5">Dify導入がもたらす3つのメリット</h2>
          <Row>
            <Col md={4}>
              <Card className="text-center mb-4 h-100 card-uniform-height">
                <Card.Body>
                  <Card.Title>1. 劇的なコスト削減</Card.Title>
                  <Card.Text>問い合わせ対応やデータ入力にかかる人件費を削減し、月々の運用コストを最小限に抑えます。</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center mb-4 h-100 card-uniform-height">
                <Card.Body>
                  <Card.Title>2. コア業務への集中と生産性向上</Card.Title>
                  <Card.Text>従業員を定型業務から解放し、企画や改善提案など、より付加価値の高い仕事に集中できる環境を作ります。</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center mb-4 h-100 card-uniform-height">
                <Card.Body>
                  <Card.Title>3. 24時間体制の高品質な顧客対応</Card.Title>
                  <Card.Text>AIチャットボットが、いつでも迅速かつ正確に顧客の質問に回答。待ち時間をなくし、顧客満足度を飛躍的に向上させます。</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="bg-primary text-white text-center py-7">
        <Container>
          <h2>さあ、あなたのビジネスにもAI革命を。</h2>
          <p className="lead">まずは30分間の無料相談で、貴社の課題をヒアリングさせてください。<br/>最適なDify活用法をご提案します。</p>
          <Button variant="light" size="lg">無料相談を予約する</Button>
        </Container>
      </section>

      <footer className="text-white text-center py-3 bg-primary">
        <Container>
          <p>&copy; 2025 Dify導入支援. All Rights Reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;