import Section from "components/Section";
import Container from "components/Container";
import { Children } from "types/Children";

function Main({ children }: Children) {
  return (
    <main>
      <Section>
        <Container>{children}</Container>
      </Section>
    </main>
  );
}
export default Main;
