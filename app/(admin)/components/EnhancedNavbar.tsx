import { vercelDeployHook } from "@/sanity/env";
import { Button, Card, Flex, Stack, Text } from "@sanity/ui";
import { NavbarProps } from "sanity";
import { useState } from "react";

const EnhancedNavbar = (props: NavbarProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleTriggerBuild = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(vercelDeployHook, {
        method: "POST",
      });

      if (response.ok) {
        console.log("Build triggered successfully");
      } else {
        console.error("Failed to trigger build");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack>
      {props.renderDefault(props)}
      <Card padding={1}>
        <Flex justify={"flex-end"}>
          <Button onClick={handleTriggerBuild} disabled={isLoading}>
            <Text weight="medium">{isLoading ? "Triggering..." : "Trigger Build"}</Text>
          </Button>
        </Flex>
      </Card>
    </Stack>
  );
};

export default EnhancedNavbar;
