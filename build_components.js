var justpyComponents = [{"attrs": {"id": "/cbox"}, "id": "/cbox", "events": [], "event_modifiers": {}, "transition": null, "html_tag": "label", "vue_type": "html_component", "show": true, "event_propagation": true, "set_focus": false, "class_name": "Label", "classes": "flex justify-center", "object_props": [{"attrs": {"id": "/cbox_0"}, "id": "/cbox_0", "events": [], "event_modifiers": {}, "transition": null, "html_tag": "span", "vue_type": "html_component", "show": true, "event_propagation": true, "set_focus": false, "class_name": "Span", "classes": "p-1", "text": "Got Milk?", "object_props": []}, {"attrs": {"id": "/cbox_1", "type": "checkbox", "checked": true}, "id": "/cbox_1", "events": ["before", "change", "input"], "event_modifiers": {}, "transition": null, "html_tag": "input", "vue_type": "html_component", "show": true, "event_propagation": true, "set_focus": false, "class_name": "CheckboxInput", "classes": "bg-gray-100 opacity-80", "input_type": "checkbox", "value": null, "debounce": 200, "object_props": []}]}];

jpComponentBuilder.setJustpyComponents(justpyComponents)
const alpha = new jpComponentBuilder.App({target: document.getElementById("components"),

						});

