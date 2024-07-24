import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const StoryList = ({ stories }) => {
  return (
    <div className="space-y-4">
      {stories.map((story) => (
        <Card key={story.id}>
          <CardHeader>
            <CardTitle>{story.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">Upvotes: {story.score}</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(story.url, "_blank")}
            >
              Read more <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StoryList;