document.querySelector('#btn-topic-add').addEventListener('click', () => {
    const lesson = document.querySelector('#txt-topic-lesson').value;
    const topic = document.querySelector('#txt-topic-name').value;
    if (lesson && topic) {
        HandleEmptyTopic();
        const deleteIcon = document.createElement('span');
        deleteIcon.classList.add('material-symbols-outlined');
        deleteIcon.innerText = 'delete';
        deleteIcon.onclick = DeleteTopic;
        
        const newTopic = document.createElement('div');
        newTopic.classList.add('topic');
        newTopic.innerHTML = `<div class="topic-det"><span class="topic-lesson">${lesson}</span><span class="topic-name">${topic}</span></div>`;
        newTopic.appendChild(deleteIcon);
        
        document.querySelector('.topics').appendChild(newTopic);
        document.querySelector('#txt-topic-lesson').value = '';
        document.querySelector('#txt-topic-name').value = '';
    }
});

document.querySelector('#btn-topic-clear').addEventListener('click', () => {
    document.querySelector('#txt-topic-lesson').value = '';
    document.querySelector('#txt-topic-name').value = '';
});

function DeleteTopic(e) {
    HandleEmptyTopic();
    document.querySelector('.topics').removeChild(e.target.parentElement);
}

function HandleEmptyTopic() {
    if(document.querySelector('.topic-empty') && document.querySelector('.topics').childElementCount === 0) {
        document.querySelector('.topics').removeChild(document.querySelector('.topic-empty'));
    } else if (document.querySelector('.topics').childElementCount === 1) {
        const emptyLesson = document.createElement('div');
        emptyLesson.classList.add('topic-empty');
        emptyLesson.innerText = 'No Topics';
        document.querySelector('.topics').appendChild(emptyLesson);
    }
}