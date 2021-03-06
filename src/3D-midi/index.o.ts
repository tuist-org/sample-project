export const branch = `{
  "type": "pawi",
  "id": "1",
  "version": "MyP5Tg",
  "entry": "main",
  "blocks": {
    "nHE66q": {
      "id": "nHE66q",
      "children": [],
      "name": "midi.songPosition",
      "content": {
        "file": "@pawi/base/dist/midi.songPosition.o.js"
      }
    },
    "U3dqgi": {
      "id": "U3dqgi",
      "children": [
        "nHE66q"
      ],
      "name": "scale",
      "content": {
        "file": "./scale.o.js"
      }
    },
    "Ld5bbe": {
      "id": "Ld5bbe",
      "children": [
        "U3dqgi"
      ],
      "name": "three.Rotation",
      "content": {
        "file": "@pawi/three/dist/three.Rotation.o.js"
      }
    },
    "buacbz": {
      "id": "buacbz",
      "children": [
        "Ld5bbe"
      ],
      "name": "three.Mesh",
      "content": {
        "file": "@pawi/three/dist/three.Mesh.o.js"
      }
    },
    "i1zrZz": {
      "id": "i1zrZz",
      "children": [
        "buacbz",
        "A-33SS"
      ],
      "name": "three.Scene",
      "content": {
        "file": "@pawi/three/dist/three.Scene.o.js"
      }
    },
    "mS8Z-r": {
      "id": "mS8Z-r",
      "children": [
        "i1zrZz"
      ],
      "name": "three.WebGLRenderer",
      "content": {
        "file": "@pawi/three/dist/three.WebGLRenderer.o.js"
      }
    },
    "CzT-Lt": {
      "id": "CzT-Lt",
      "children": [
        "mS8Z-r"
      ],
      "name": "anim.Loop",
      "content": {
        "file": "@pawi/base/dist/anim.Loop.o.js"
      }
    },
    "Af1Wx1": {
      "id": "Af1Wx1",
      "children": [
        "CzT-Lt"
      ],
      "name": "midi.Input",
      "content": {
        "file": "@pawi/base/dist/midi.Input.o.js"
      }
    },
    "main": {
      "id": "main",
      "name": "main",
      "content": {
        "file": "./main.js"
      },
      "children": [
        "Af1Wx1"
      ]
    },
    "A-33SS": {
      "id": "A-33SS",
      "children": [],
      "name": "three.Lights",
      "content": {
        "file": "@pawi/three/dist/three.Lights.o.js"
      }
    }
  }
}`
