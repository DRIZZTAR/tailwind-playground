import React from "react";

const CharacterInfo = () => {
  return (
    <div>
      <div className="rounded-lg text-black">
        <div className="grid grid-cols-2 items-center gap-4">
          <div className="flex items-center">
            <img
              alt="Character"
              className="rounded-full"
              height="64"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHxE-PYXQhe8Oprs2HeL0KJkvLyLMFqXNrA&usqp=CAU"
              style={{
                aspectRatio: "64/64",
                objectFit: "cover",
              }}
              width="64"
            />
            <div className="space-y-1.5">
              <h2 className="text-xl font-semibold">Marcus Aurelius</h2>
              <div className="flex items-center space-x-2 text-sm">
                <span className="w-4 h-4" role="img" aria-label="heart">
                  🇨🇦
                </span>
                <span>Level 5</span>
              </div>
            </div>
          </div>
          <div className="space-y-2 text-right">
            <div className="flex items-center space-x-2">
              <span role="img" aria-label="heart">
                ❤️
              </span>
              <div className="grid grid-cols-2 items-center gap-1 text-sm">
                <span>Health</span>
                <span>100/100</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4" role="img" aria-label="shield">
                🛡️
              </span>
              <div className="grid grid-cols-2 items-center gap-1 text-sm">
                <span>Armor</span>
                <span>20</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4" role="img" aria-label="wand">
                🪄
              </span>
              <div className="grid grid-cols-2 items-center gap-1 text-sm">
                <span>Mana</span>
                <span>50/50</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t pt-4 text-sm">
          <p>
            You are standing at the edge of the Enchanted Forest. The ancient
            trees loom before you, their branches twisted and gnarled. You can
            hear the sound of birdsong in the distance, and the air is filled
            with the sweet scent of wildflowers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;