# version.cam in GitBook

Test pages for the version.cam GitBook integration (github.com/versioncam/gitbook). Each block below is written by hand, the way a team using Git Sync would write it.

## The clip

{% @versioncam/clip url="https://clips.version.cam/versioncam/versioncam/01-create-a-shipment" %}

## A pinned version

{% @versioncam/clip url="https://clips.version.cam/versioncam/versioncam/01-create-a-shipment@f76139c7446d" %}

## A clip that doesn't exist, or is private

version.cam answers the same for both, so the block can't tell them apart.

{% @versioncam/clip url="https://clips.version.cam/versioncam/versioncam/no-such-clip" %}

## A project's page, which isn't a clip

{% @versioncam/clip url="https://clips.version.cam/versioncam/versioncam" %}

## GitBook's own embed of the same link

{% embed url="https://clips.version.cam/versioncam/versioncam/01-create-a-shipment" %}
