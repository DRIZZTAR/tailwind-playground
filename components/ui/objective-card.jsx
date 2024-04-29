import { Checkbox } from "@/components/ui/checkbox";
import { CardContent, Card } from "@/components/ui/card";

export default function ObjectiveCard() {
  return (
    <Card className="w-full max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <CardContent className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="flex md:flex-1 items-center justify-center shadow-lg">
          <img
            alt="Adventure Picture"
            className="object-cover rounded-lg pt-4 rounded-md w-full h-48 md:h-auto shadow-2xl"
            src="/adventurePhoto.webp"
          />
        </div>
        {/* Objective and Sub-Objectives Section */}
        <div className="flex-1 p-6 space-y-4">
          {/* Main Objective */}
          <div className="space-y-2">
            <div className="flex items-center">
              <Checkbox
                className="form-checkbox h-5 w-5 text-blue-600"
                id="main-objective"
              />
              <label
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                htmlFor="main-objective"
              >
                Main Objective
              </label>
            </div>
            <p className="text-sm text-gray-500">
              Explore a mysterious island, uncover hidden treasures, and survive
              the challenges.
            </p>
          </div>
          {/* Sub-Objectives */}
          <div className="space-y-4">
            <h6 className="text-lg font-semibold">Sub-Objectives</h6>
            <div className="flex flex-col space-y-2">
              {[1, 2, 3].map((index) => (
                <div key={`sub-objective-${index}`}>
                  <div className="flex items-center">
                    <Checkbox
                      className="form-checkbox h-5 w-5 text-blue-600"
                      id={`sub-objective-${index}`}
                    />
                    <label
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      htmlFor={`sub-objective-${index}`}
                    >
                      Sub-Objective {index}
                    </label>
                  </div>
                  <p className="text-sm text-gray-500">
                    {index === 1 &&
                      "Find the hidden temple and unlock its secrets."}
                    {index === 2 &&
                      "Gather resources to build a shelter and survive the night."}
                    {index === 3 &&
                      "Solve puzzles to reveal the island's ancient history."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
