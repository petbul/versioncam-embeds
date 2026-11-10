# versioncam embed test

This repository checks which of [version.cam](https://version.cam)'s embed snippets play on which docs platform. Each test site has one page per snippet, for the clip at <https://clips.version.cam/versioncam/versioncam/01-create-a-shipment>:

- [Docusaurus 3](https://petbul.github.io/versioncam-embeds/docusaurus/)
- [MkDocs Material](https://petbul.github.io/versioncam-embeds/mkdocs/)
- [Starlight](https://petbul.github.io/versioncam-embeds/starlight/)
- Mintlify, in `mintlify/`: run `npx mint dev` there, or deploy that folder on Mintlify

This README is the test for a GitHub README. Below are the snippets as version.cam gives them, so you can see which ones GitHub keeps.

## Markdown, a GIF that links to the clip

[![Create a shipment](https://clips.version.cam/versioncam/versioncam/01-create-a-shipment?format=gif)](https://clips.version.cam/versioncam/versioncam/01-create-a-shipment)

## The iframe

<iframe src="https://clips.version.cam/versioncam/versioncam/01-create-a-shipment/embed" style="width:100%;aspect-ratio:1280/800;border:0" allow="fullscreen" loading="lazy" title="Create a shipment"></iframe>

## The video

<video src="https://clips.version.cam/versioncam/versioncam/01-create-a-shipment?format=mp4" poster="https://clips.version.cam/versioncam/versioncam/01-create-a-shipment?format=poster" width="100%" controls playsinline></video>

## The element and its script

<script type="module" src="https://clips.version.cam/embed.js"></script>
<version-cam src="https://clips.version.cam/versioncam/versioncam/01-create-a-shipment"></version-cam>

## The video's address on a line of its own

https://clips.version.cam/versioncam/versioncam/01-create-a-shipment?format=mp4
