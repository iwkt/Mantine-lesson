import { Button, Group } from "@mantine/core";
import { Layout } from "../components/Layout";
import { BrandGithub, ThreeDCubeSphere } from "tabler-icons-react";

const ButtonDemo = () => {
  return (
    <Layout title="Button">
      <Group position="center">
        <Button
          color="cyan"
          radius="md"
          size="xl"
          uppercase
          leftIcon={<BrandGithub />}
        >
          Press
        </Button>
      </Group>
    </Layout>
  );
};

export default ButtonDemo;
